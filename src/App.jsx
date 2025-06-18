import {useCustomRoute} from './hooks/useCustomRoute';

const App = () => {
  const {setRuta, asignarComponente} = useCustomRoute();
    return (
      <>{asignarComponente()}
      </>
    )
}

export default App