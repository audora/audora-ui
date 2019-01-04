import system from '@rebass/components'

const List = system(
  {
    is: 'div',
    fontFamily: 'sans',
    m: 0,
    p: 0,
    borderRadius: 0,
    fontWeight: 'normal',
    fontSize: 2,
    bg: 'transparent',
  },
  () => ({
    display: 'flex',
    flexDirection: 'column',
  })
)

List.displayName = 'List'

export default List
