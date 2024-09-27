import CourseContent from "./components/CourseContent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero className='mb-6' />
      <CourseContent className='mb-6' />
      <Footer />
    </main>
  );
}