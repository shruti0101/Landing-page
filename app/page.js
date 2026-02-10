import Herosection from '@/components/Herosection'
import Services from "@/components/Services";
import About from "@/components/About";
import Clientele from "@/components/Clientele";
import Testimonials from "@/components/Testimonials";
import Cta from '@/components/Cta';
import Whatsapp from '@/components/Whatsapp';
import Cta3 from '@/components/Cta3';
import Industry from "@/components/Industry"
import Form2 from '@/components/Form2';
export default function Home() {
  return (
    <>
      <Whatsapp></Whatsapp>
      <Herosection></Herosection>
      <Clientele></Clientele>
      <Services></Services>
      <Industry></Industry>

      <Form2></Form2>
      <Cta3></Cta3>
      <Testimonials></Testimonials>
      <About></About>
      <Cta></Cta>



    </>
  );
}
