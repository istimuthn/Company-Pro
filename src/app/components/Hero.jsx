import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroContent = {
  text: {
    subheading: "Welcome to In Life",
    heading: "Protect yourself and families, In Life",
    description:
      "we believe in safeguarding your future and protecting what matters most. As a leading life insurance provider, we are dedicated to ensuring financial security and peace of mind for you and your loved ones. Explore our website to discover the comprehensive range of life insurance solutions we offer, designed to meet your unique needs and aspirations.",
  },
  images: {
    img1: "/Hero1.jpg",
    img2: "/Hero2.jpg",
    img3: "/Hero3.jpg",
    img4: "/Hero4.jpg",
    img5: "/Hero5.jpg",
  },
};

export const Hero = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-[#fff3d9] before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {heroContent.text.subheading}
              </span>
            )}

            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3">
              <Link
                href="#"
                className="py-4 px-5 bg-[#134761]  text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="families"
                    className="object-cover h-full w-full rounded-2xl"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="families"
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                  <div className="bg-[#fff3d9] rounded-2xl rounded-tr-[200px]"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="families"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#ccf0ee] rounded-2xl rounded-bl-[200px]"></div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="families"
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-5/12">
                {heroContent.images.img5 && (
                  <div>
                    <Image
                      src={heroContent.images.img5}
                      width={446}
                      height={495}
                      alt="families"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
