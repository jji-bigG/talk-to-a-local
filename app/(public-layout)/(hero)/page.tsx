import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh]">
      <h3 className="text-4xl font-bold text-center">
        Talk to a Local! <br /> Explore a new community, town, or city.
      </h3>
      <p className="sm:w-[75%] mx-auto text-center text-muted-foreground ">
        We find the best local guides to integrate to our LLM, built using the latest
        LLM technology. You provide the LLM and we provide the guide.
      </p>
      <Link href="/register" className={buttonVariants({ size: "lg" })}>
        Get started
      </Link>
    </div>
  );
}
