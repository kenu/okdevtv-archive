# Theano
* Python library for mathematical expressions.

## Installation
```
pip install Theano
```

## Prerequisite
* numpy
* Adding two Scalars

```
import numpy
import theano.tensor as T
from theano import function
x = T.dscalar('x')
y = T.dscalar('y')
z = x + y
f = function([x, y], z)

f(2, 3)
array(5.0)

numpy.allclose(f(16.3, 12.1), 28.4)
True
numpy.allclose(f(16.3, 12.1), 28.3)
False

type(x)
<class 'theano.tensor.var.TensorVariable'>

x.type
TensorType(float64, scalar)

T.dscalar
TensorType(float64, scalar)

x.type is T.dscalar
True

```

```
from theano import pp
print(pp(z))
(x + y)
```

```
numpy.allclose(z.eval({x : 16.3, y : 12.1}), 28.4)
True
```

* Adding two Matrices

```
x = T.dmatrix('x')
y = T.dmatrix('y')
z = x + y
f = function([x, y], z)
f([[1, 2], [3, 4]], [[10, 20], [30, 40]])
array([[ 11.,  22.],
       [ 33.,  44.]])
```
* more
  * http://deeplearning.net/software/theano/tutorial/examples.html


## Tutorial
```
from theano import *
import theano.tensor as T
```

### Derivatives in Theano
* Computing Gradients
  * http://deeplearning.net/software/theano/tutorial/gradients.html#computing-gradients

```
import numpy
import theano
import theano.tensor as T
from theano import pp
x = T.dscalar('x')
y = x ** 2
gy = T.grad(y, x)
pp(gy)  # print out the gradient prior to optimization
'((fill((x ** TensorConstant{2}), TensorConstant{1.0}) * TensorConstant{2}) * (x ** (TensorConstant{2} - TensorConstant{1})))'

f = theano.function([x], gy)
f(4)
array(8.0)

numpy.allclose(f(94.2), 188.4)
True

pp(f.maker.fgraph.outputs[0])
'(TensorConstant{2.0} * x)'
```

  * the gradient of the logistic funtions

```
x = T.dmatrix('x')
s = T.sum(1 / (1 + T.exp(-x)))
gs = T.grad(s, x)
dlogistic = theano.function([x], gs)
dlogistic([[0, 1], [-1, -2]])
array([[ 0.25      ,  0.19661193],
       [ 0.19661193,  0.10499359]])
```

* Computing the Jacobian
  * http://deeplearning.net/software/theano/tutorial/gradients.html#computing-the-jacobian
  
```
import theano
import theano.tensor as T
x = T.dvector('x')
y = x ** 2
J, updates = theano.scan(lambda i, y,x : T.grad(y[i], x), sequences=T.arange(y.shape[0]), non_sequences=[y,x])
f = theano.function([x], J, updates=updates)
f([4, 4])
array([[ 8.,  0.],
       [ 0.,  8.]])
```


* Computing the Hessian
  * http://deeplearning.net/software/theano/tutorial/gradients.html#computing-the-hessian
  
```
x = T.dvector('x')
y = x ** 2
cost = y.sum()
gy = T.grad(cost, x)
H, updates = theano.scan(lambda i, gy,x : T.grad(gy[i], x), sequences=T.arange(gy.shape[0]), non_sequences=[gy, x])
f = theano.function([x], H, updates=updates)
f([4, 4])
array([[ 2.,  0.],
       [ 0.,  2.]])
```

## 참고
* Theano basic tutorial
  * http://deeplearning.net/software/theano/tutorial/
* http://deeplearning.net/tutorial/