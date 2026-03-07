import { Header } from "../components/Header";

export function NotFoundPage (cart) {
    return (
        <>
            <title>404 (Not Found)</title>
            <Header cart={cart}/>

            <p>
                Khong tim thay gi!
            </p>
        </>
    );
}