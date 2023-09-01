# Emoji Plugin

El Emoji Plugin es una pequeña biblioteca que te permite obtener caracteres de emoji utilizando una clave de acceso a un servicio web de emojis. Esta biblioteca es útil cuando necesitas recuperar emojis específicos por su slug y mostrarlos en tu aplicación.

## Instalación

Para usar el Emoji Plugin, primero debes instalarlo en tu proyecto. Puedes hacerlo utilizando npm o yarn.

### Usando npm:

```bash
npm install emoji-plugin
```

### Usando yarn:

```bash
yarn add emoji-plugin
```

## Uso

Una vez que hayas instalado el Emoji Plugin, puedes importarlo en tu aplicación y comenzar a usarlo.

```javascript
const EmojiPlugin = require('emoji-plugin');

// Crear una instancia del Emoji Plugin
const emoji = new EmojiPlugin();

// Obtener un emoji por su slug y clave de acceso
const input = {
  key: 'tu-clave-de-acceso',
  slug: 'e0-6-waving-hand', // Puedes reemplazarlo por el slug del emoji que desees obtener
};

emoji.execute(input)
  .then((response) => {
    console.log('Emoji character:', response.character);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```

Asegúrate de reemplazar `'tu-clave-de-acceso'` con tu propia clave de acceso al servicio web de emojis.

## API

### `emoji.execute(input: EmojiInputs): Promise<EmojiOutputs>`

Este método te permite obtener un emoji por su slug y clave de acceso.

- `input`: Un objeto que debe incluir la propiedad `key` (la clave de acceso) y opcionalmente `slug` (el slug del emoji que deseas obtener).

- `return`: Una promesa que resuelve en un objeto con la propiedad `character` que contiene el emoji.

## Ejemplos

Puedes encontrar ejemplos de uso en el directorio de ejemplos de este repositorio.

## Contribuir

Si deseas contribuir a este proyecto, ¡estamos abiertos a tus sugerencias! Por favor, abre un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT.
