import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
    return (
        <div >
            <Head>
                <meta keywords={"next-js" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная" />
                <A href={'/users'} text="Пользователи" />
                <A href={'/abouts'} text="Список дел" />
            </div>
            <main className='main-content'>
                {children}
            </main>
        </div>
    );
};

export default MainContainer;
