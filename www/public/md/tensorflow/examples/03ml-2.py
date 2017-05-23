from __future__ import print_function
import tensorflow as tf

x_data = [1., 2., 3.]
y_data = [1., 2., 3.]

# Set model weights
W = tf.Variable(tf.random_uniform([1], -10.0, 10.0))

X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)

# Our hypothesis
hypothesis = W * X

# Simplified cost function
cost = tf.reduce_mean(tf.square(hypothesis - Y))

# Minimize
descent = W - tf.multiply(0.1, tf.reduce_mean(tf.multiply((tf.multiply(W, X) - Y), X)))
update = W.assign(descent)

# Initializing the variables
init = tf.initialize_all_variables()

# Launch the graph
sess = tf.Session()
sess.run(init)

# Fit the line
for step in xrange(100):
    sess.run(update, feed_dict = {X:x_data, Y:y_data})
    print(step, sess.run(cost, feed_dict = {X:x_data, Y:y_data}), sess.run(W))

