export default function(Component){
  console.log(Component)
  return (
    () => Component({inserted:true})
  )
}