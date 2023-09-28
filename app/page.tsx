import { Hero } from "@/components/hero";
import { Testimonial } from "@/components/testimonial"
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Community } from "@/components/community";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Features/>
			<Community/>
			<Testimonial/>
		</>

	);
}
