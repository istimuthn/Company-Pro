import Image from "next/image";
import React from "react";

const testimonialContent = {
  heading: {
    headSubTitle: "Customers Says...",
    headingTitle: "Hear What Our Customers Say",
    description:
      "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
  },
  testimonials: [
    {
      img: "/po1.jpg",
      name: "Brad Prexsel",
      titleRole: "Customer - Dallas, TX",
      testimony:
        "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
    },
    {
      img: "/po2.jpg",
      name: "Romi Hasan",
      titleRole: "Customer - Miami, FL",
      testimony:
        "Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.",
    },
    {
      img: "/po3.jpg",
      name: "Robin Parkin",
      titleRole: "Customer - Seattle, WA",
      testimony:
        "After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.",
    },
  ],
};
const Testimonial = () => {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {testimonialContent.heading.headSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-[#fff3d9] before:left-0 before:top-0 before:bottom-0 before:-z-10">
                {testimonialContent.heading.headSubTitle}
              </span>
            )}
            {testimonialContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {testimonialContent.heading.headingTitle}
              </h2>
            )}

            {testimonialContent.heading.description && (
              <p className="text-body leading-relaxed mb-10">
                {testimonialContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0">
                {testimonialContent.testimonials.map((testimonial, idx) => {
                  if (idx == 2) return null;
                  return (
                    <div
                      className={`bg-white p-7 rounded-lg w-full ${
                        idx == 1 ? "" : "mb-6"
                      }`}
                    >
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={testimonial.img}
                            width={579}
                            height={720}
                            className="object-cover h-14 w-14 rounded-full"
                            alt="testimon"
                          />
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.titleRole && (
                            <span className="text-sm">
                              {testimonial.titleRole}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>"{testimonial.testimony}"</blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-[#CCF0EE] rounded-full mb-6"></div>
                  <div className="bg-white p-7 rounded-lg w-full mb-6">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonialContent.testimonials[2].img}
                          width={579}
                          height={720}
                          className="object-cover h-14 w-14 rounded-full "
                          alt="testimoni"
                        />
                      </div>
                      <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-heading text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                        {testimonialContent.testimonials[2].titleRole && (
                          <span className="text-sm">
                            {testimonialContent.testimonials[2].titleRole}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        "{testimonialContent.testimonials[2].testimony}"
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
