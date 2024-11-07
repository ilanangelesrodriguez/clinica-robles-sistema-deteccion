import { motion } from 'framer-motion'
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import DefaultLayout from "@/layouts/default"
import { title, subtitle } from "@/components/primitives"
import { CalendarIcon, PhoneIcon, ClockIcon } from 'lucide-react'

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
]

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
          className="max-w-5xl mx-auto mt-12"
        >
          <h3 className={title({ size: "sm", class: "text-center mb-6" })}>
            Nuestros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <Button as={Link} color="primary" variant="flat" size="sm">
                      Más Información
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
          className="mt-12 text-center"
        >
          <h3 className={title({ size: "sm", class: "mb-4" })}>
            Tecnología de Vanguardia
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-6">
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
          className="mt-12 text-center"
        >
          <h3 className={title({ size: "sm", class: "mb-4" })}>
            ¿Por qué elegirnos?
          </h3>
          <ul className="max-w-2xl mx-auto text-left list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Equipo médico altamente calificado y experimentado</li>
            <li>Instalaciones modernas y cómodas</li>
            <li>Atención personalizada y centrada en el paciente</li>
            <li>Amplia gama de especialidades médicas</li>
            <li>Tecnología de vanguardia en diagnóstico y tratamiento</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12"
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