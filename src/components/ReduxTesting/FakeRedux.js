import Provider from './FakeProvider';

export default function(Component){
  const provider = new Provider
  console.log(Component)
  return (
    () => Component(provider.state)
  )
}