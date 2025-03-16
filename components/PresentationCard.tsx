import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function PresentationCard() {

    return (
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-linear-65 from-orange-400/90 to-yellow-200/90 w-4/5 sm:max-w-96 mx-auto text-black sm:text-2xl" >
            <h1 className="text-4xl font-bold">Latin Food</h1>
            <p className="text-xl">Nuvia Lopez</p>
            <Image 
                src="/images/profile.jpg"
                alt="Nuvia's profile picture"
                width={250}
                height={300}
                className="rounded-xl object-cover mx-auto"
                priority
            />
            {/* tipo de comida */}
            <p>Yo preparo comida de Ecuador, especialista en pescado y arroces</p>
            <address>
                24092 Hamburg <br />
                Germany <br />
            </address>

            <Link href="tel:5555555555" className="hover:underline" >
                555-555-5555
            </Link>
            <Link href="/events">
                <Button>Proximos eventos</Button>
            </Link>
            <p>Me necesitas para tu proximo evento ?</p>
            <Link href="/events">
                <Button>Ver Servicios</Button>
            </Link>
      </div>
    )
}