import React from "react";
import './post-list-item.css'

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justyfy-content-between">
            <span className="app-list-item-label">
                'Hello world!'
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="bn-start btn-sm">
                    <i className="fa fa-start"></i>
                </button>
                <button type="button" className="bn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}
export default PostListItem;