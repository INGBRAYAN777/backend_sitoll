"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const departamentoRuta_1 = __importDefault(require("../../../models/departamentoRuta"));
class DepartamentoRutaDao {
    static crear(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(objDepaRuta);
            this.departamentoRutaRepository.insert(objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento Ruta registrado", respuesta: respuesta.raw });
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({ mensaje: "Fallo al crear el departamento ruta" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.find()
                .then((respuesta) => {
                const arregloDepaRuta = respuesta;
                res.status(200).json(arregloDepaRuta);
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos" });
            });
        });
    }
}
DepartamentoRutaDao.departamentoRutaRepository = conexionBD_1.default.getRepository(departamentoRuta_1.default);
exports.default = DepartamentoRutaDao;
