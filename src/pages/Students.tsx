function Students() {
    return ( 
        <>
            <h1>Students</h1>

            <div className=" p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4">
                <div className="flex gap-4">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="35" height="35" rx="10" fill="#F07D00"/><g clip-path="url(#clip0_39_158)"><path d="M25.1188 17.8656C26.8844 16.1 26.8844 13.2406 25.1188 11.475C23.5563 9.91247 21.0938 9.70934 19.2969 10.9937L19.2469 11.0281C18.7969 11.35 18.6938 11.975 19.0156 12.4218C19.3375 12.8687 19.9625 12.975 20.4094 12.6531L20.4594 12.6187C21.4625 11.9031 22.8344 12.0156 23.7031 12.8875C24.6875 13.8718 24.6875 15.4656 23.7031 16.45L20.1969 19.9625C19.2125 20.9468 17.6188 20.9468 16.6344 19.9625C15.7625 19.0906 15.65 17.7187 16.3656 16.7187L16.4 16.6687C16.7219 16.2187 16.6156 15.5937 16.1688 15.275C15.7219 14.9562 15.0938 15.0593 14.775 15.5062L14.7406 15.5562C13.4531 17.35 13.6563 19.8125 15.2188 21.375C16.9844 23.1406 19.8438 23.1406 21.6094 21.375L25.1188 17.8656ZM8.88126 17.1343C7.11563 18.9 7.11563 21.7593 8.88126 23.525C10.4438 25.0875 12.9063 25.2906 14.7031 24.0062L14.7531 23.9718C15.2031 23.65 15.3063 23.025 14.9844 22.5781C14.6625 22.1312 14.0375 22.025 13.5906 22.3468L13.5406 22.3812C12.5375 23.0968 11.1656 22.9843 10.2969 22.1125C9.31251 21.125 9.31251 19.5312 10.2969 18.5468L13.8031 15.0375C14.7875 14.0531 16.3813 14.0531 17.3656 15.0375C18.2375 15.9093 18.35 17.2812 17.6344 18.2843L17.6 18.3343C17.2781 18.7843 17.3844 19.4093 17.8313 19.7281C18.2781 20.0468 18.9063 19.9437 19.225 19.4968L19.2594 19.4468C20.5469 17.65 20.3438 15.1875 18.7813 13.625C17.0156 11.8593 14.1563 11.8593 12.3906 13.625L8.88126 17.1343Z" fill="white"/></g><defs><clipPath id="clip0_39_158"><rect width="20" height="15" fill="white" transform="translate(7 10)"/></clipPath></defs></svg>
                    <h3>Liens</h3>
                </div>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className="text-primary">
                            Github : <a href="" className="text-black border-b-[1px] border-black mx-2">CamilleDev</a>
                        </li>
                        <li className="text-primary">
                            Linkedin : <a href="" className="text-black border-b-[1px] border-black mx-2">www.linkedin.com/in/camille</a>               
                        </li>
                        <li className="text-primary">
                            Portfolio : <a href="" className="text-black border-b-[1px] border-black mx-2">https://portfolio-camille</a>
                        </li>
                        <li className="text-primary">
                            CV : <a href="" className="text-black border-b-[1px] border-black mx-2">Cliquer ici</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default Students;