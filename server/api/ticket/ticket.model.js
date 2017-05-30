'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './ticket.events';

var TicketSchema = new mongoose.Schema({
    user: String,
    nombre: String,
    descripcion: String,
    categoria: String,
    tipo: String,
    fechaAbierto: Date,
    fechaCerrado: Date,
    sla: Number,
    estado: String
});

registerEvents(TicketSchema);
export default mongoose.model('Ticket', TicketSchema);
