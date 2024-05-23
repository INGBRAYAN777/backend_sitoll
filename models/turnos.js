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
let Turnos = class Turnos {
    constructor(cod, dias, hit, hft, titu, est) {
        this.codTurno = cod;
        this.diasTurno = dias;
        this.horaInicioTurno = hit;
        this.horaFinTurno = hft;
        this.tipoTurno = titu;
        this.estadoTurno = est;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_turno" }),
    __metadata("design:type", Number)
], Turnos.prototype, "codTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dias_turno", length: 200 }),
    __metadata("design:type", String)
], Turnos.prototype, "diasTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "hora_inicio_turno", length: 250 }),
    __metadata("design:type", String)
], Turnos.prototype, "horaInicioTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "hora_fin_turno", length: 250 }),
    __metadata("design:type", String)
], Turnos.prototype, "horaFinTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tipo_turno", length: 250 }),
    __metadata("design:type", String)
], Turnos.prototype, "tipoTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "estado_turno", length: 250 }),
    __metadata("design:type", String)
], Turnos.prototype, "estadoTurno", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => turnosUsuario_1.default, (objTurnoUsuario) => objTurnoUsuario.codTurnU),
    __metadata("design:type", turnosUsuario_1.default)
], Turnos.prototype, "turnoUsuarios", void 0);
Turnos = __decorate([
    (0, typeorm_1.Entity)("turnos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String, String, String, String])
], Turnos);
exports.default = Turnos;
