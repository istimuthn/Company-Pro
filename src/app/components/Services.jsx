import Image from "next/image";
import React from "react";

const servicesContent = {
  heading: {
    headSubTitle: "Our Wonderful Services",
    headingTitle: "Our Services",
    description:
      "We understand that every individual has unique requirements. That's why we offer a diverse range of life insurance products, from term life to whole life, to cater to your specific financial goals and circumstances.",
  },
  items: [
    {
      icon: "/icon1.png",
      title: "Child Safety Solutions",
      desc: "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/icon2.png",
      title: "Elderly Care Monitoring",
      desc: "Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.",
    },
    {
      icon: "/icon3.png",
      title: "Home Fire Safety",
      desc: "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/icon4.png",
      title: "Financial Planning",
      desc: "Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security.",
    },
    {
      icon: "/icon5.png",
      title: "Personal Safety Devices",
      desc: "Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.",
    },
    {
      icon: "/icon6.png",
      title: "Insurance Coverage",
      desc: "Tailored insurance policies to protect your family's financial future, including life insurance, health insurance, and property insurance.",
    },
  ],
};

const Services = () => {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          {servicesContent.heading.headSubTitle && (
            <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-[#fff3d9] before:left-0 before:top-0 before:bottom-0 before:-z-10">
              {servicesContent.heading.headSubTitle}
            </span>
          )}
          {servicesContent.heading.headingTitle && (
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
              {servicesContent.heading.headingTitle}
            </h2>
          )}
          {servicesContent.heading.description && (
            <p className="text-body leading-relaxed">
              {servicesContent.heading.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((item, idx) => (
            <div className="flex space-x-10" key={item.title}>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                  <Image
                    src={item.icon}
                    width={62}
                    height={62}
                    alt="services"
                  />
                </span>
              </div>
              <div>
                {item.title && (
                  <h3 className="text-heading font-bold text-md mb-3">
                    {item.title}
                  </h3>
                )}
                {item.desc && <p className="leading-relaxed">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
