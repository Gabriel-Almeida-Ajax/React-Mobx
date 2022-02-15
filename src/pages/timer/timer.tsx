import { observer } from "mobx-react-lite";
import TimerDefault from '../../store/timer.store';

import Display from "../../components/display";

type Props = {
    store?: typeof TimerDefault;
}

const TimeView = observer(({ store = TimerDefault }: Props) => {
    return (
        <Display
            counter={store.currentTime}
            methods={[
                { name: 'Começar', method: store.start },
                { name: 'Parar', method: store.stop, },
                { name: 'Reiniciar', method: store.restart }
            ]}
        />
    );
})

export default TimeView;