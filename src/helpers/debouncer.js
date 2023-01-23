export function debouncerdecorator(funcao, tempo) {
  let _timeoutCode = null;

  function decorada() {
    if (_timeoutCode) {
      clearTimeout(_timeoutCode);
    }
    const _this = this;
    const _arg = arguments;
    _timeoutCode = setTimeout(() => {
      funcao.apply(_this, _arg);
      _timeoutCode = null;
    }, tempo);
  }
  return decorada;
}
