import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';
export const Posts = () => {

    const params = useParams();
    console.log(params);
    const { id } = params;
    const [qs, setQs] = useSearchParams();
    

    return (
        <div className='postsContainer'>
            {/* <h1> Posts {`Params: ${id}`} {`Queries: ${qs}`} </h1>  */}
            <h1> Posts {`Para: ${id}`} {`Qs: ${qs.get('page')}`} </h1>
            <Outlet />
        </div>
    )
}