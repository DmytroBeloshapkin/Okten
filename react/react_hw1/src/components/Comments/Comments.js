import {useState, useEffect} from "react";
import { Comment } from '../Comment/Comment';
import {commentsService} from "../../services";

export const Comments = () => {
    const [comments, setComents] = useState(null);

    useEffect( () => {
       commentsService.getAllComments().then(value => setComents(value))
    }, []);

    return (
        <div>
            {comments && comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )

}