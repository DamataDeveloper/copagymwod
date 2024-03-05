import Image from 'next/image';
export const LinkSocial = ()=>{
    return(
        <div className='flex h-16  justify-between items-center'>
            <div className='flex flex-1 '>
                <a className='flex flex-1 justify-start h-16 items-center ' href="">
                    <img 
                        className='w-38 h-10 ml-2' 
                        src="img/gymwod.png" 
                        alt="logo da gymwod" 
                    />
                </a>
            </div>
            <div className='flex flex-1 justify-between'>
                <a 
                    className='flex flex-1 justify-end items-center h-16 hover: group ' 
                    href="https://www.instagram.com/copagymwod?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img 
                        className='w-10 mr-2 group-hover:rotate-360 transition-all duration-300 ease-in-out transform' 
                        src="img/instagran.png" 
                        alt="instagran" 
                    />
                    <span className='hidden md:block mg-2 text-blue-950 font-bold text-lg'>@copagymwod</span>
                </a>
                <a 
                    className='flex flex-1 justify-end items-center h-16  hover: group' 
                    href="https://wa.me/5511970712149">
                    <img 
                        className='w-10 mr-2 group-hover:rotate-360 transition-all duration-300 ease-in-out transform' 
                        src="img/whatsap.png" 
                        alt="whatsap" 
                    />
                    <span className='hidden mr-2 md:block text-blue-950 font-bold text-lg'>11970712149</span> 
                </a>
            </div>
        </div>
    )
}