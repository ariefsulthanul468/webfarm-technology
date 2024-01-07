import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="Harness the power of a robust web infrastructure with our comprehensive webfarm services. We specialize in optimizing server configurations, load balancing, and ensuring seamless scalability to handle varying levels of web traffic. Our expert team strategically deploys web servers, databases, and content delivery networks to create a resilient and high-performance web ecosystem. With meticulous attention to detail, we fortify your online presence, providing a reliable foundation that ensures your website stays responsive, secure, and ready for the demands of the digital landscape. Trust us to cultivate a webfarm that not only meets your current needs but also adapts and grows with your business aspirations."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
