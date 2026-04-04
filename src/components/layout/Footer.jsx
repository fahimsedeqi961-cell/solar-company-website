import { MapPin, Phone, Mail, ChevronRight, Sun } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"

const icons = {
    MapPin,
    Phone,
    Mail
}

const contacts = [
    { icon: "MapPin", text: "Kabul-Qalacha,Afgahnistan" },
    { icon: "Phone", text: "+93 073018289" },
    { icon: "Mail", text: "solarix@gmail.com" },
]



export default function Footer() {
    return (
        <>
            <footer className="py-12 md:py-24 px-6 md:px-16  bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand section */}
                    <div className="flex flex-col items-start">
                        <Link to="/" className='flex items-center gap-2 text-2xl font-bold tracking-tighter text-slate-100 uppercase'>
                            <Sun className="text-blue-700 fill-blue-600/10" size={28} />
                            <span>ZAZI<span className="text-blue-700">SOLAR</span></span>
                        </Link>
                        <p className="mt-4 text-slate-400 max-w-xs">
                            Providing sustainable energy solutions for a brighter, greener future.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-100 tracking-wide mb-6">
                            Quick Links
                        </h2>
                        <div className="flex flex-col space-y-4 ">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Our Services", path: "/services" },
                                { name: "Contact Us", path: "/contact" },
                                { name: "Projects", path: "/projects" },
                                { name: "Support", path: "/support" }
                            ].map((link, i) => (

                                <div key={i} className="group flex items-center text-left gap-3">
                                    <ChevronRight
                                        size={16}
                                        className="text-blue-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                                    />
                                    <a
                                        href={link.path}
                                        className="text-gray-200  group-hover:text-blue-500 transition-colors duration-300 ">
                                        {link.name}
                                    </a>
                                </div>
                            )
                            )}
                        </div>
                    </div>

                    {/* Contact container */}
                    <div className="">
                        <h2 className="text-xl font-bold text-gray-100 tracking-wide mb-6">Address</h2>
                        <div className="flex flex-col space-y-4 ">
                            {contacts.map((item, i) => {
                                const Icon = icons[item.icon];
                                return (
                                    <div key={i} className="flex items-center text-left text-gray-200  gap-4">
                                        <Icon size={18} className="text-blue-600 shrink-0" />
                                        <span className="text-sm md:text-base">{item.text}</span>
                                    </div>
                                )
                            })}

                            <div className="flex gap-3 items-center text-white mt-6">
                                {
                                    [
                                        { icon: FaFacebook, href: "https://facebook.com/fahimkhan" },
                                        { icon: FaInstagram, href: "https://instagram.com/fahimkhan" },
                                        { icon: FaTwitter, href: "https://twitter.com/fahimkhan" },
                                        { icon: FaWhatsapp, href: "https://wa.me/0730167151" }
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 hover:border-blue-600 hover:bg-blue-600/10 text-slate-300 hover:text-blue-600 transition-all duration-300"
                                        >
                                            <social.icon size={20} />
                                        </a>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-800 p-2 text-center ">
                    <p
                        className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Zazi Solar Company, All Rights Reserved
                    </p>

                </div>
            </footer>
        </>
    )
}