//* Acá se importan todos los modelos
import Usuarios from "./Usuarios.js";
import Roles from "./Roles.js";

//!Acá se hacen las relaciones

//* Usuario tiene muchas citas, adicional el foreign key es id_usuario
Roles.hasMany(Usuarios, { foreignKey: 'id_rol' });
Usuarios.belongsTo(Roles, { foreignKey: 'id_rol' });

export {
  Usuarios,
  Roles,
};