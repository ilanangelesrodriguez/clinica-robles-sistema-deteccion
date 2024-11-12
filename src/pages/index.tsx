import { motion } from 'framer-motion'
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import DefaultLayout from "@/layouts/default"
import { title, subtitle } from "@/components/primitives"
import { CalendarIcon, PhoneIcon, ClockIcon, ActivityIcon } from 'lucide-react'

const services = [
  {
    title: "Consultas Médicas",
    description: "Atención personalizada con nuestros especialistas.",
    icon: <PhoneIcon className="w-6 h-6" />,
  },
  {
    title: "Urgencias 24/7",
    description: "Servicio de emergencias disponible todo el día.",
    icon: <ClockIcon className="w-6 h-6" />,
  },
  {
    title: "Agendar Cita",
    description: "Reserve su cita de manera fácil y rápida.",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    title: "Predicción de Cáncer de Mama",
    description: "Utilice nuestra herramienta de predicción avanzada.",
    icon: <ActivityIcon className="w-6 h-6" />,
  },
]

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-12 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className={title({ color: "blue" })}>Clínica Robles</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Cuidando de su salud con excelencia y compasión
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            as={Link}
            href="/agendar-cita"
            color="primary"
            variant="shadow"
            size="lg"
            endContent={<CalendarIcon className="w-5 h-5" />}
          >
            Agendar Cita
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <h3 className={title({ size: "sm", class: "text-center mb-8" })}>
            Nuestros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardBody className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardBody>
                  <CardFooter className="justify-center">
                    <Button 
                      as={Link} 
                      href={"/predecir"}
                      color="primary" 
                      variant="flat" 
                      size="sm"
                    >
                      {service.title === "Predicción de Cáncer de Mama" ? "Ir a Predicción" : "Más Información"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center w-full max-w-4xl mx-auto"
        >
          <h3 className={title({ size: "sm", class: "mb-6" })}>
            Tecnología de Vanguardia
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            En Clínica Robles, utilizamos la última tecnología para garantizar diagnósticos precisos y tratamientos efectivos.
          </p>
          <Image
            src="https://cdentalanayarobles.com/wp-content/uploads/2021/05/8_cli%CC%81dent-scaled.jpg"
            alt="Tecnología médica avanzada"
            className="rounded-lg shadow-lg"
            width={800}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center w-full max-w-4xl mx-auto"
        >
          <h3 className={title({ size: "sm", class: "mb-6" })}>
            ¿Por qué elegirnos?
          </h3>
          <ul className="max-w-2xl mx-auto text-left list-disc list-inside text-gray-600 dark:text-gray-400">
            <li className="mb-2">Equipo médico altamente calificado y experimentado</li>
            <li className="mb-2">Instalaciones modernas y cómodas</li>
            <li className="mb-2">Atención personalizada y centrada en el paciente</li>
            <li className="mb-2">Amplia gama de especialidades médicas</li>
            <li className="mb-2">Tecnología de vanguardia en diagnóstico y tratamiento</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16"
        >
          <Button
            as={Link}
            href="/contacto"
            color="primary"
            variant="bordered"
            size="lg"
            endContent={<PhoneIcon className="w-5 h-5" />}
          >
            Contáctenos
          </Button>
        </motion.div>
      </section>
    </DefaultLayout>
  )
}