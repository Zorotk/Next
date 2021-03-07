import Link from "next/link";

export default function Error() {
    return (
        <div>
            <h1>
                ОШИБКА
            </h1>
            <Link href='/'>
                <a>Главная страница</a>
            </Link>
        </div>

    )
};
