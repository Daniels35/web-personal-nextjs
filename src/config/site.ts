export const site = {
  name: "Daniel Diaz",
  role: "Senior Software Engineer",
  location: "Medellín, Colombia",
  email: "danielstiven35@gmail.com",
  phone: "+57 313 580 4424",
  whatsapp: "573135804424",
  github: "https://github.com/Daniels35",
  linkedin: "https://linkedin.com/in/danielsdiaz35",
};

export function whatsappUrl(message = "Hola Daniel, quiero conversar sobre un proyecto para mi empresa.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
