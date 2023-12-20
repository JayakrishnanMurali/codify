export const DEFAULT_SETTINGS = {
  fontSize: "16",
  bindings: "standard",
  tabSize: "2",
  vimConfig: `" - this is a comment
" - nmap == normal map
" - \`:M\` is an ex command to run a monaco action
nmap K  :M<Space>editor.action.showHover
nmap gd :M<Space>editor.action.goToDeclaration
nmap gr :M<Space>editor.action.goToReferences
nmap gi :M<Space>editor.action.goToImplementation
nmap gx :M<Space>editor.action.openLink
nmap ]d :M<Space>editor.action.marker.next
nmap [d :M<Space>editor.action.marker.prev
nmap gcc :M<Space>editor.action.commentLine`,
  testPanelHeight: 300,
};
