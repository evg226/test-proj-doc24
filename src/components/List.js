import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchList, listItemRemove, likeSet} from "../store/actions";
import {getlikes, getList} from "../store/selectors";
import './List.css';


export const List = () => {
    const [likesFilter, setLikesFilter] = useState(false);
    const dispatch = useDispatch();
    const list = useSelector(getList, shallowEqual);
    const likes = useSelector(getlikes, shallowEqual);

    useEffect(() => {
        dispatch(fetchList());
    }, [])

    const handleChangeLikesFilter = () => {
        setLikesFilter(!likesFilter);
    }

    const handleClickLike = (itemId) => {
        dispatch(likeSet(itemId));
    }

    const handleClickDelIcon = (itemId) => {
        dispatch(listItemRemove(itemId));
    }


    return (
        <div>
            <h4>Список</h4>
            <label className={"likes-filter"}>
                <input type="checkbox"
                       defaultChecked={likesFilter}
                       onChange={handleChangeLikesFilter}
                />
                только лайковые
            </label>
            <div className={'list__container'}>
                {
                    list.loading ?
                        <h6>Список грузится...</h6>
                        :
                        list.error ?
                            <h6>{list.error}</h6>
                            :
                            list.data.length && list.data.map((item, i) =>
                                <div key={i}
                                     className={"list_item"}
                                     style={{
                                         display:
                                             likesFilter ?
                                                 likes[item._id] ? "flex" : "none"
                                                 : "flex"
                                     }}>
                                    <p>{item.text}</p>
                                    <small>{item.createdAt}</small>
                                    <div className={'icons'}>
                                        <p
                                            className={'like_button'}
                                            onClick={() => handleClickLike(item._id)}
                                        >
                                            {likes[item._id] ? <>&#128147;</> : <>&#9825;</>}
                                        </p>
                                        <p className={'icon-del'}
                                           onClick={()=>handleClickDelIcon(item._id)}
                                        >
                                            <img src={'img/recycle.png'}/>
                                        </p>
                                    </div>
                                </div>
                            )
                }
            </div>
        </div>
    )
}