"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const turnosUsuario_1 = __importDefault(require("./turnosUsuario"));
let Puesto = class Puesto {
    /*@ManyToOne(() => Peaje,
        (objPeaje: Peaje) => objPeaje.codPeaje,
        {onDelete: "RESTRICT", onUpdate: "CASCADE"})
    @JoinColumn([{
        name: "cod_peaje", referencedColumnName: "codPeaje"
    }])
    public codPeajeD?: Peaje;*/
    constructor(cod, nom, cla) {
        this.codPuesto = cod;
        this.codPeaje = nom;
        this.horarioPuesto = cla;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_puesto" }),
    __metadata("design:type", Number)
], Puesto.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cod_peaje" }),
    __metadata("design:type", Number)
], Puesto.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "horario_puesto", length: 250 }),
    __metadata("design:type", String)
], Puesto.prototype, "horarioPuesto", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => turnosUsuario_1.default, (objTurnoUsuario) => objTurnoUsuario.codTurnU),
    __metadata("design:type", Array)
], Puesto.prototype, "turnoUsuarioP", void 0);
Puesto = __decorate([
    (0, typeorm_1.Entity)("puestos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String])
], Puesto);
exports.default = Puesto;
