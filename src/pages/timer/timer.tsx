import { observer } from "mobx-react-lite";
import store from '../../store/timer.store';

import Display from "../../components/display";

const TimeView = observer(() => {
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