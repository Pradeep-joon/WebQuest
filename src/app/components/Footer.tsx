import Link from 'next/link';
const Footer: React.FC = () => {

    return (
        <footer className="absolute bottom-0 w-full bg-neutral-100">
            <p className="py-3 px-8 text-sm text-slate-600">India</p>
           
            <div className="flex py-3 px-8">
                <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
                    <Link href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1" >About</Link>
                    <Link href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=11" className=' hover:underline cursor-pointer'>Advertising</Link>
                    <Link href="https://www.google.com/intl/en_in/business/" className=' hover:underline cursor-pointer'>Business</Link>
                    <Link href="https://www.google.com/search/howsearchworks/?fg=1" className=' hover:underline cursor-pointer'>How Search works </Link>
                </ul>
                <ul className="flex ml-auto [&>*]:ml-6 text-sm text-slate-600">
                    <Link href="https://policies.google.com/privacy?hl=en-IN&fg=1"className=' hover:underline cursor-pointer'>Privacy</Link>
                    <Link href="https://policies.google.com/terms?hl=en-IN&fg=1"className=' hover:underline cursor-pointer'>Terms</Link>
                    <Link href="https://www.google.com/preferences?hl=en-IN&fg=1"className=' hover:underline cursor-pointer'>Settings</Link>
                </ul>
            </div>
        </footer>
    )       
}

export default Footer;