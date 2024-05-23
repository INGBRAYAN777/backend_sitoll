"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
/* Import de las rutas de los modelos */
const departamentoRuta_1 = __importDefault(require("../../app/deparment/route/departamentoRuta"));
const registroRuta_1 = __importDefault(require("../../app/register/route/registroRuta"));
const accesoRuta_1 = __importDefault(require("../../app/access/route/accesoRuta"));
const rutaDepartamento_1 = __importDefault(require("../../app/routes/routeR/rutaDepartamento"));
const seguridad_1 = __importDefault(require("../../middleware/seguridad"));
const departamentoRuta_2 = __importDefault(require("../../app/departmentRoute/route/departamentoRuta"));
const puestoRuta_1 = __importDefault(require("../../app/puesto/route/puestoRuta"));
const peajeRuta_1 = __importDefault(require("../../app/peaje/route/peajeRuta"));
const turnoRuta_1 = __importDefault(require("../../app/turno/route/turnoRuta"));
const turnoUsuarioRuta_1 = __importDefault(require("../../app/turnoUsuario/route/turnoUsuarioRuta"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.cargarRutas();
    }
    cargarConfiguracion() {
        this.app.set("PORT", 3300);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    cargarRutas() {
        this.app.use("/api/private/departament/", seguridad_1.default.verificarToken, departamentoRuta_1.default);
        this.app.use("/api/private/routes/", seguridad_1.default.verificarToken, rutaDepartamento_1.default);
        this.app.use("/api/private/departmentRoute", seguridad_1.default.verificarToken, departamentoRuta_2.default);
        this.app.use("/api/private/puesto", seguridad_1.default.verificarToken, puestoRuta_1.default);
        this.app.use("/api/private/peaje", seguridad_1.default.verificarToken, peajeRuta_1.default);
        this.app.use("/api/private/turno", seguridad_1.default.verificarToken, turnoRuta_1.default);
        this.app.use("/api/private/turnoUsuario", seguridad_1.default.verificarToken, turnoUsuarioRuta_1.default);
        /*Rutas publicas*/
        this.app.use("/api/public/register/", registroRuta_1.default);
        this.app.use("/api/public/access/", accesoRuta_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor funcionando en el puerto :", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
