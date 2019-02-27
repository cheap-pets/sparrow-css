.popup-group,
[popup-group],
.dropdown-group {
  position: relative;
  overflow: visible;
}
.dropdown {
  position: absolute;
  z-index: 200;
  left: 0;
  display: block;
  padding: 0;
  max-height: 400px;
  overflow: auto;
  visibility: hidden;
  background-color: #fff;
  opacity: 0;
  @mixin shadow2;
  @mixin transition-opacity;
}