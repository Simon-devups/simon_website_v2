import error from "../public/error.png"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: 'صفحه مورد نظر پیدا نشد',
    description: 'صفحه ای که دنبالش بودید پیدا نشد.',
}

function notFound() {
    return (
        <div style={{background: 'white' , display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ aspectRatio: '1/1', width: '400px', position: 'relative' }}>
                <Image fill src={error}></Image>
                <Link href={'/'} className="goHome">بازگشت به خانه</Link>
            </div>
        </div>
    )
}
export default notFound