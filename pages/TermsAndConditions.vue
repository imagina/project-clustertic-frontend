<script setup lang="ts"></script>

<template>
  <SearchProject class="tw-mt-20" />
  <section class="tw-container">
    <Card class="tw-py-2 tw-my-5">
      <CardHeader>
        <CardTitle class="!tw-font-medium">Términos del Servicio</CardTitle>
      </CardHeader>
      <CardContent>
        <h3>1. Aceptación de los Términos</h3>
        <p>
          Al acceder o utilizar la plataforma <NuxtLink to='/' >clustertolimatic.co</NuxtLink> (en adelante,
          "la Plataforma"), el usuario (en adelante, "Usuario") acepta los
          presentes Términos y Condiciones. Si no está de acuerdo con estos
          términos, debe abstenerse de utilizar la Plataforma.
        </p>

        <h3>2. Definiciones</h3>
        <p>
          Plataforma: Se refiere a <NuxtLink to='/' >clustertolimatic.co</NuxtLink> y todos los servicios
          asociados. Usuario: Cualquier persona que accede y utiliza la
          Plataforma. Contenido: Información, datos, textos, imágenes, videos y
          cualquier otro material disponible en la Plataforma.
        </p>

        <h3>3. Uso de la Plataforma</h3>
        <p>
          El Usuario se compromete a utilizar la Plataforma de manera
          responsable y a no realizar ninguna de las siguientes acciones:
        </p>
        <ul>
          <li>
            3.1. Usar la Plataforma para fines ilícitos, fraudulentos o
            contrarios a la moral y las buenas costumbres.
          </li>
          <li>3.2. Interferir o alterar el funcionamiento de la Plataforma.</li>
          <li>
            3.3. Recolectar datos personales de otros usuarios sin autorización.
          </li>
          <li>
            3.4. Publicar contenido ofensivo, difamatorio o que viole derechos
            de terceros.
          </li>
        </ul>

        <h3>4. Registro y Seguridad</h3>
        <ul>
          <li>
            4.1. El Usuario puede necesitar registrarse para acceder a ciertas
            funcionalidades de la Plataforma.
          </li>
          <li>
            4.2. El Usuario es responsable de mantener la confidencialidad de
            sus credenciales y de todas las actividades realizadas bajo su
            cuenta.
          </li>
          <li>
            4.3. La Plataforma se reserva el derecho de suspender o eliminar
            cuentas que violen estos Términos.
          </li>
        </ul>

        <h3>5. Propiedad Intelectual</h3>
        <ul>
          <li>
            5.1. Todo el contenido de la Plataforma, incluidos textos, imágenes,
            gráficos, logotipos y software, es propiedad de <NuxtLink to='/' >clustertolimatic.co</NuxtLink>
            o sus licenciantes, y está protegido por leyes de propiedad
            intelectual.
          </li>
          <li>
            5.2. El Usuario no está autorizado a copiar, distribuir, modificar o
            usar el contenido sin el consentimiento previo por escrito.
          </li>
        </ul>

        <h3>6. Responsabilidad y Garantías</h3>
        <ul>
          <li>
            6.1. La Plataforma se proporciona "tal cual" y no ofrece garantías
            de ningún tipo, expresas o implícitas.
          </li>
          <li>
            6.2. <NuxtLink to='/' >clustertolimatic.co</NuxtLink> no se hace responsable de los daños o
            perjuicios que puedan derivarse del uso de la Plataforma.
          </li>
          <li>
            6.3. La Plataforma no garantiza que el servicio sea ininterrumpido o
            libre de errores.
          </li>
        </ul>

        <h3>7. Modificaciones a los Términos y Condiciones</h3>
        <p>
          La Plataforma se reserva el derecho de modificar estos Términos en
          cualquier momento. Las modificaciones entrarán en vigor una vez
          publicadas en esta página. El uso continuado de la Plataforma implica
          la aceptación de los Términos actualizados.
        </p>

        <h3>8. Política de Privacidad</h3>
        <p>
          El uso de la Plataforma está sujeto a nuestra Política de Privacidad,
          donde se detalla cómo recopilamos, utilizamos y protegemos la
          información del Usuario.
        </p>

        <h3>9. Jurisdicción y Ley Aplicable</h3>
        <p>
          Estos Términos se rigen por las leyes de Colombia y cualquier disputa
          será resuelta ante los tribunales competentes de la Cámara de Comercio
          de Ibagué.
        </p>

        <h3>10. Contacto</h3>
        <p>
          Para cualquier duda o consulta relacionada con estos Términos, el
          Usuario puede comunicarse con nosotros a través del correo
          electrónico: <a href="mailto:hola@clustertolimatic.co" >hola@clustertolimatic.co</a>
        </p>
        <h3>Última actualización: 20 de Noviembre de 2024</h3>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
h3{
  @apply tw-font-semibold;
}
a {
  @apply tw-text-link
}
p,ul{
  @apply tw-pl-3
}
</style>
