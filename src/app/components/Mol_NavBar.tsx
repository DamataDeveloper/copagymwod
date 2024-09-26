import Link from 'next/link'
import { LinkNav } from './Ato_LinkNav'
export const NavBar = () => {
    return (
        <nav className='flex h-16  justify-between items-center gap-3'>
            <div className='flex w-48  '>
                <Link className='flex flex-1 justify-start h-16 items-center ' href="/">
                    <img
                        className='w-38 h-10 ml-2'
                        src="img/gymwod.png"
                        alt="logo da gymwod"
                    />
                </Link>
            </div>
            <div className='flex flex-1  justify-end gap-2  md:gap-6'>
                <LinkNav src="img/instagran.png" alt="instagran" span="@copagymwod" href="https://www.instagram.com/copagymwod?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                <LinkNav src="img/whatsap.png" alt="whatsap" span="(11) 97071-2149" href="https://wa.me/5511970712149" />
                {/* <LinkNav src="img/login.png" alt="login" span="Entrar" href="" /> */}
            </div>
        </nav>
    )
}