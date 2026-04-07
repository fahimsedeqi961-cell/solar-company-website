import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
    name: z.string(),
    email: z.string().email("Invalid Email"),
    subject: z.string(),
    notes: z.string()
})


export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm({ resolver: zodResolver(Schema) });
    return (
        <>
            <section className=" bg-slate-100 overflow-hidden mt-12 md:mt-24 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[600px]">

                    {/* content */}
                    <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 space-y-8 ">
                        <div>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm border-l-4 border-blue-600 pl-3">
                                Contact us
                            </span>

                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight  ">
                                Get In Touch <br className="hidden md:block" />
                            </h1>
                        </div>

                        <p className="text-lg text-slate-600 font-jakarta leading-relaxed max-w-7xl">
                            Get a free quote tailored to your needs and budget.
                            Tell us about your project and our experts will get back to you quickly
                        </p>


                        {/* Contact form */}
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                    placeholder="Name"
                                    className="w-full p-4 rounded-md bg-white shadow-sm text-lg  text-slate-700 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                                />
                                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email")}
                                    placeholder="Email"
                                    className="p-4 w-full rounded-md bg-white border border-slate-100 shadow-sm text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                                />
                                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                                <input
                                    type="text"
                                    id="subject"
                                    {...register("subject")}
                                    placeholder="Subject"
                                    className="p-4 w-full col-span-2 rounded-md bg-white border border-slate-100 shadow-sm text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                                />
                                {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}


                                <textarea name="" id="notes"
                                    placeholder="Special Notes"
                                    {...register("notes")}
                                    rows={4}
                                    className="p-2 w-full col-span-2 text-slate-700 rounded-xl shadow-sm border border-slate-100 bg-white focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all "
                                >
                                </textarea>
                                {errors.notes && <p className="text-sm text-red-500">{errors.notes.message}</p>}

                            </div>
                        </form>

                        <button
                            type="submit"
                            className="btn-primary w-full px-10 ">
                            submit
                        </button>

                    </div>

                    {/* Image Container */}
                    <div className="relative w-full h-[400px] lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80066.5206267133!2d4.9534607!3d51.1623372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14f1c32f57d41%3A0x3a5dbd4599d869f4!2sHand%20Car%20Wash%20Geel!5e0!3m2!1sen!2s!4v1771870869011!5m2!1sen!2s"
                            className="w-full h-full shadow-lg"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >

                        </iframe>
                        <div className="absolute inset-0 bg-blue-900/10"></div>
                    </div>
                </div >
            </section >
        </>
    )
}