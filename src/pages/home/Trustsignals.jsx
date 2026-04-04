import data from "../../data/data.json"
import { Smile, FolderCheck, Award, UserCog } from "lucide-react";

const iconMap = {
    Smile,
    FolderCheck,
    Award,
    UserCog
};

export default function TrustSignals() {
    return (
        <>
            <section className=" bg-white py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-12 lg-gap-8 ">

                        {data.trustSignals.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div
                                    key={index}
                                    className="group p-2 transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Icon and state */}
                                    <div className="flex gap-4 items-center mb-4">
                                        <div className="p-3 rounded-full bg-blue-600 text-white group-hover:bg-blue-700  transition-colors duration-300">
                                            <Icon size={42} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                                            {item.numbers}
                                        </h3>
                                    </div>

                                    {/* Content row */}
                                    <div className="space-y-2">
                                        <h2 className="md:text-xl font-bold text-slate-800 tracking-wide uppercase text-sm border-l-4 border-blue-600 pl-3">
                                            {item.title}
                                        </h2>
                                        <p className="text-base  text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}