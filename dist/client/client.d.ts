import { ClientConfiguration } from "../config/config";
import { Color } from "../message/color";
import { ClientMixin, ConnectionMixin } from "../mixins/base-mixin";
import { RoomStateTracker } from "../mixins/roomstate-tracker";
import { UserStateTracker } from "../mixins/userstate-tracker";
import { BaseClient } from "./base-client";
import { SingleConnection } from "./connection";
export declare type ConnectionPredicate = (conn: SingleConnection) => boolean;
export declare class ChatClient extends BaseClient {
    get wantedChannels(): Set<string>;
    get joinedChannels(): Set<string>;
    roomStateTracker?: RoomStateTracker;
    userStateTracker?: UserStateTracker;
    readonly connectionMixins: ConnectionMixin[];
    readonly connections: SingleConnection[];
    private activeWhisperConn;
    constructor(configuration?: ClientConfiguration);
    connect(): Promise<void>;
    close(): void;
    destroy(error?: Error): void;
    /**
     * Sends a raw IRC command to the server, e.g. <code>JOIN #forsen</code>.
     *
     * Throws an exception if the passed command contains one or more newline characters.
     *
     * @param command Raw IRC command.
     */
    sendRaw(command: string): void;
    join(channelName: string): Promise<void>;
    part(channelName: string): Promise<void>;
    joinAll(channelNames: string[]): Promise<Record<string, Error | undefined>>;
    privmsg(channelName: string, message: string): Promise<void>;
    say(channelName: string, message: string): Promise<void>;
    me(channelName: string, message: string): Promise<void>;
    timeout(channelName: string, username: string, length: number, reason?: string): Promise<void>;
    ban(channelName: string, username: string, reason?: string): Promise<void>;
    whisper(username: string, message: string): Promise<void>;
    setColor(color: Color): Promise<void>;
    getMods(channelName: string): Promise<string[]>;
    getVips(channelName: string): Promise<string[]>;
    ping(): Promise<void>;
    newConnection(): SingleConnection;
    use(mixin: ClientMixin): void;
    private reconnectFailedConnection;
    /**
     * Finds a connection from the list of connections that satisfies the given predicate,
     * or if none was found, returns makes a new connection. This means that the given predicate must be specified
     * in a way that a new connection always satisfies it.
     *
     * @param predicate The predicate the connection must fulfill.
     */
    private requireConnection;
}
//# sourceMappingURL=client.d.ts.map