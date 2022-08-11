import { install } from './install';

export {
    Container,
    ContainerInstance,
    Handler,
    Service,
    ServiceIdentifier,
    ServiceMetadata,
    ServiceOptions,
    Token
} from 'typedi';

export * from './decorators';

export default {
    install
};
