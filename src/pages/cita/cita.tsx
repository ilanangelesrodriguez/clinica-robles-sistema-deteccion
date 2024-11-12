import { motion } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { Input, Select, SelectItem, Textarea, Button, Card, CardBody } from "@nextui-org/react"
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, MailIcon, FileTextIcon } from 'lucide-react'
import DefaultLayout from "@/layouts/default"
import { title, subtitle } from "@/components/primitives"

const specialties = [
  "Medicina General",
  "Pediatría",
  "Ginecología",
  "Cardiología",
  "Dermatología",
  "Oftalmología",
  "Ortopedia",
]

export default function AgendarCitaPage() {
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Lógica para enviar los datos del formulario
  }

  return (
    <DefaultLayout>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      >
        <div className="text-center max-w-2xl">
          <h1 className={title({ color: "blue" })}>Agendar Cita</h1>
          <p className={subtitle({ class: "mt-4" })}>
            Complete el formulario para programar su cita con nuestros especialistas
          </p>
        </div>

        <Card className="w-full max-w-2xl mt-8">
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Controller
                    name="nombre"
                    control={control}
                    rules={{ required: "El nombre es obligatorio" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Nombre completo"
                        placeholder="Ingrese su nombre"
                        startContent={<UserIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
                        isInvalid={!!errors.nombre}
                        errorMessage={errors.nombre?.message?.toString()}
                      />
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Controller
                    name="telefono"
                    control={control}
                    rules={{ required: "El teléfono es obligatorio" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Teléfono"
                        placeholder="Ingrese su teléfono"
                        startContent={<PhoneIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
                        isInvalid={!!errors.telefono}
                        errorMessage={errors.telefono?.message?.toString()}
                      />
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Controller
                    name="email"
                    control={control}
                    rules={{ 
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                      }
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Email"
                        placeholder="Ingrese su email"
                        startContent={<MailIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message?.toString()}
                      />
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Controller
                    name="especialidad"
                    control={control}
                    rules={{ required: "Seleccione una especialidad" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Especialidad"
                        placeholder="Seleccione la especialidad"
                        isInvalid={!!errors.especialidad}
                        errorMessage={errors.especialidad?.message?.toString()}
                      >
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Controller
                    name="fecha"
                    control={control}
                    rules={{ required: "La fecha es obligatoria" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="date"
                        label="Fecha preferida"
                        placeholder="Seleccione la fecha"
                        startContent={<CalendarIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
                        isInvalid={!!errors.fecha}
                        errorMessage={errors.fecha?.message?.toString()}
                      />
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Controller
                    name="hora"
                    control={control}
                    rules={{ required: "La hora es obligatoria" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="time"
                        label="Hora preferida"
                        placeholder="Seleccione la hora"
                        startContent={<ClockIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
                        isInvalid={!!errors.hora}
                        errorMessage={errors.hora?.message?.toString()}
                      />
                    )}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Controller
                  name="motivo"
                  control={control}
                  rules={{ required: "El motivo de la consulta es obligatorio" }}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      label="Motivo de la consulta"
                      placeholder="Describa brevemente el motivo de su consulta"
                      startContent={<FileTextIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
                      isInvalid={!!errors.motivo}
                      errorMessage={errors.motivo?.message?.toString()}
                    />
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center"
              >
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  endContent={<CalendarIcon className="ml-2" />}
                >
                  Agendar Cita
                </Button>
              </motion.div>
            </form>
          </CardBody>
        </Card>
      </motion.section>
    </DefaultLayout>
  )
}