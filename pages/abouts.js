import Link from "next/link";
import MainContainer from "../components/MainContainer";



const Abouts = ({ todos }) => {
    return (
        <MainContainer><div>
            <h1>Список дел</h1>
            <div>

                <ul>
                    {todos.map(todo =>
                        <li key={todo.id}>
                            <Link href={`/abouts/${todo.id}`}>
                                <a>{todo.title}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

        </div>



            <style jsx>
                {`p{color:#6200ff;
                font-size:24px}`}
            </style>
        </MainContainer>
    );
};

export default Abouts;
export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=99')
    const todos = await response.json()
    return { props: { todos } }
}