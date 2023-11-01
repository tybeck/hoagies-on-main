// import {Inject, Injectable} from '@nestjs/common';
// // // import type {AmqpConnectionManager, ChannelWrapper} from 'amqp-connection-manager';
// import {connect} from 'amqp-connection-manager';
// import {ConfirmChannel, ConsumeMessage} from 'amqplib';
//
// import {ConfigService, Environment} from '@hom-api/config';
// import {RmqQueue} from '@hom-api/types';
//
// export type MqConnectionOptions = {
//   exchange: string;
//   queue: string;
//   durable?: boolean;
//   consumeMessage?: (msg: ConsumeMessage) => void;
// }
//
// @Injectable()
// export class MqService {
//   private exchange: MqConnectionOptions['exchange'];
//   private queue: MqConnectionOptions['queue'];
//   private durable: MqConnectionOptions['durable'];
//
//   constructor(@Inject(ConfigService) private config: ConfigService) {}
//
//   // private controlMessage(fn: (msg: ConsumeMessage) => void) {
//   //   return (msg: ConsumeMessage) => {
//   //     fn(msg);
//   //     this.channel.ack(msg);
//   //   };
//   // }
//
//   configure(options: MqConnectionOptions): MqService {
//     this.queue = options.queue;
//     this.exchange = options.exchange;
//     this.durable = options.durable;
//
//     return this;
//   }
//
//   async get(): Promise<any> {
//     return new Promise(async resolve => {
//       const {queue, exchange, durable: durability} = this;
//       // const {queue, exchange, durable: durability, consumeMessage} = options;
//       const durable = typeof durability === 'boolean' ? durability : true;
//       const [url, port, user, pass] = this.config.get(
//         Environment.RmqUrl,
//         Environment.RmqPort,
//         Environment.RmqUser,
//         Environment.RmqPass,
//       );
//       if (url && port && user && pass) {
//         const connectionString = [
//           url.replace(
//             '{{credentials}}',
//             [user, pass].join(':'),
//           ),
//           port,
//         ].join(':');
//
//         const connection = connect(connectionString);
//
//         await connection.connect();
//
//         connection.createChannel({
//           json: true,
//           setup: async (channel: ConfirmChannel) => {
//             return Promise.all([
//               channel.assertQueue(RmqQueue.Fb, {durable}),
//               channel.bindQueue(RmqQueue.Fb, 'amq.topic', RmqQueue.Fb),
//               channel.consume(RmqQueue.Fb, (msg) => {
//                 console.log('IS THERE A MESSAGE??????');
//                 channel.close();
//                 connection.close();
//                 resolve(msg);
//               }),
//             ]);
//           },
//         });
//       }
//     });
//   }
//
//   // async get() {
//   //   if (this.conn && this.channel && this.conn.isConnected() && this.queue) {
//   //     return this.channel.get(RmqQueue.Fb);
//   //   }
//   // }
//
//   // async send<T>(msg: T) {
//   //   if (this.conn && this.channel && this.conn.isConnected() && this.queue) {
//   //     return this.channel.sendToQueue(this.queue, msg);
//   //   }
//   //   return null;
//   // }
// }
//
// @Injectable()
// export class MqService {}