import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, MapPin, Coffee, Wifi, ShieldCheck, BedDouble } from 'lucide-react';
import hotelImage from '@/assets/mercure-hotel.jpeg';

const Accommodation = () => {
    const { t } = useTranslation();

    const features = [
        { icon: Star, text: t('accommodation.features.5star', '5-Star Luxury') },
        { icon: BedDouble, text: t('accommodation.features.comfort', 'Premium Comfort') },
        { icon: Coffee, text: t('accommodation.features.breakfast', 'Open Buffet Breakfast') },
        { icon: Wifi, text: t('accommodation.features.wifi', 'Free High-Speed WiFi') },
        { icon: ShieldCheck, text: t('accommodation.features.security', '24/7 Security') },
        { icon: MapPin, text: t('accommodation.features.location', 'Central Location') },
    ];

    return (
        <section className="section-padding bg-blue-50/30">
            <div className="container-dental">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="heading-secondary text-dental-navy mb-6 text-left">
                            {t('accommodation.title', 'Exclusive 5-Star Stay: Mercure Hotel')}
                        </h2>
                        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                            {t('accommodation.description', 'Your comfort is our priority! We host all our patients at the luxurious 5-star Mercure Hotel. Recover in style with premium amenities, a central location, and the exceptional hospitality you deserve during your smooth dental treatment journey.')}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-blue-50"
                                >
                                    <feature.icon className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-dental-navy text-sm">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group z-10 bg-white">
                            <img 
                                src={hotelImage} 
                                alt="Mercure Hotel 5 Stars" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                            <div className="absolute bottom-6 left-6 flex flex-col gap-1 z-20">
                                <div className="flex text-yellow-400 drop-shadow-md">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <span className="text-white font-semibold text-xl drop-shadow-lg">Mercure Hotel</span>
                            </div>
                        </div>
                        {/* Decorative abstract background elements */}
                        <div className="absolute -z-0 -bottom-6 -right-6 w-full h-full border-2 border-blue-200 rounded-2xl rounded-br-[4rem]" />
                        <div className="absolute -z-0 -top-6 -left-6 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
